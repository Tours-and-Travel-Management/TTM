package com.app.controllers;
import com.app.dto.LoginDTO;

import com.app.pojos.Admin;
import com.app.pojos.Customer;
import com.app.pojos.Guide;
import com.app.services.AdminService;
import com.app.services.CustomerService;
import com.app.services.GuideService;
import com.app.dto.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.ApiOperation;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin
@RestController
@RequestMapping("/api")
public class LoginController {
	 @Autowired
	    private AdminService adminService;

	    @Autowired
	    private CustomerService customerService;

	    @Autowired
	    private GuideService guideService;
	    @PostMapping("/validate")
//	    @PostMapping("/validate")
//		public ResponseEntity<?> validateUser(@RequestBody LoginDTO dto) {
//			System.out.println(dto);
//			Customer user=customerService.validate(dto.getUserid(),dto.getPwd());
//			if(user!=null)
//				return Response.success(user);
//			else
//				return Response.status(HttpStatus.NOT_FOUND);
//		}
	    public ResponseEntity<?> validateUser(@RequestBody LoginDTO dto) {
	        // Attempt to validate as Admin first
	    	System.out.println(dto);
	        Admin admin = adminService.validate(dto.getUserid(), dto.getPwd());
	        if (admin != null) {
	            return Response.success(admin); // Return success with Admin object
	        }

	        // Attempt to validate as Customer
	        Customer user = customerService.validate(dto.getUserid(), dto.getPwd());
	        if (user != null) {
	            return Response.success(user); // Return success with Customer object
	        }

	        // Attempt to validate as Guide
	        Guide guide = guideService.validate(dto.getUserid(), dto.getPwd());
	        if (guide != null) {
	            return Response.success(guide); // Return success with Guide object
	        }

	        // If no user is found
	        return Response.status(HttpStatus.NOT_FOUND);
	    }
}

