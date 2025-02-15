package com.app.utils;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

@Component
public class DiskStorageServiceImpl implements StorageService {

    @Value("${disk.upload.basepath}")
    private String BASEPATH;

    @Override
    public List<String> loadAll() {
        File dirPath = new File(BASEPATH);
        if (!dirPath.exists() || !dirPath.isDirectory()) {
            System.err.println("Storage directory does not exist or is not a directory.");
            return List.of();
        }
        return Arrays.asList(dirPath.list());
    }

    @Override
    public String store(MultipartFile file) {
        if (file.isEmpty()) {
            throw new RuntimeException("Cannot store empty file.");
        }

        // Ensure BASEPATH exists
        File dir = new File(BASEPATH);
        if (!dir.exists()) {
            dir.mkdirs(); // Create directory if it does not exist
        }

        // Generate unique filename with extension
        String originalFilename = file.getOriginalFilename();
        String ext = originalFilename.substring(originalFilename.lastIndexOf("."));
        String fileName = UUID.randomUUID().toString().replaceAll("-", "") + ext;
        File filePath = new File(BASEPATH, fileName);

        // Save file to disk
        try (FileOutputStream out = new FileOutputStream(filePath)) {
            FileCopyUtils.copy(file.getInputStream(), out);
            return fileName;
        } catch (IOException e) {
            throw new RuntimeException("Failed to store file: " + fileName, e);
        }
    }

    @Override
    public Resource load(String fileName) {
        File filePath = new File(BASEPATH, fileName);
        if (!filePath.exists()) {
            System.err.println("File not found: " + fileName);
            return null;
        }
        return new FileSystemResource(filePath);
    }

    @Override
    public void delete(String fileName) {
        File filePath = new File(BASEPATH, fileName);
        if (!filePath.exists()) {
            System.err.println("Attempted to delete non-existing file: " + fileName);
            return;
        }
        if (!filePath.delete()) {
            System.err.println("Failed to delete file: " + fileName);
        }
    }
}
