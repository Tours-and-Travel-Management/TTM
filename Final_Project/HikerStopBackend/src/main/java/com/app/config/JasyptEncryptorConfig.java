package com.app.config;

import org.jasypt.encryption.StringEncryptor;
import org.jasypt.encryption.pbe.PooledPBEStringEncryptor;
import org.jasypt.encryption.pbe.config.SimpleStringPBEConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JasyptEncryptorConfig {

    @Bean(name = "jasyptStringEncryptor")
    /*Creates a Spring-managed bean named "jasyptStringEncryptor".
Can be injected anywhere in the application.*/
    public StringEncryptor passwordEncryptor(){
    	
    	
        PooledPBEStringEncryptor encryptor = new PooledPBEStringEncryptor();
        
        
        SimpleStringPBEConfig config = new SimpleStringPBEConfig();
        
        
        config.setPassword("Shridhar"); // encryptor's private key
        config.setAlgorithm("PBEWithMD5AndDES");
        config.setKeyObtentionIterations("1000");
        config.setPoolSize("1");
        config.setProviderName("SunJCE");
        config.setSaltGeneratorClassName("org.jasypt.salt.RandomSaltGenerator");
        config.setStringOutputType("base64");
        encryptor.setConfig(config);
        return  encryptor;
    }

}
/*This code configures Jasypt (Java Simplified Encryption)
 *  This code configures Jasypt (Java Simplified Encryption) for encrypting and decrypting sensitive data, such as passwords, API keys, or database credentials.
 * 
 * 
 */
 