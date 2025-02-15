package com.app.utils;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
/*AuthenticationManager: Handles user authentication.
UsernamePasswordAuthenticationToken: Represents the username/password-based authentication token.
Authentication: Represents an authenticated user.
AuthenticationException: Exception thrown for authentication failures.
UsernamePasswordAuthenticationFilter: Base class for handling login requests.*/
import lombok.extern.slf4j.Slf4j;
/*Enables logging (log.info(), log.error(), etc.).*/
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;

/*custom authentication filter that extends UsernamePasswordAuthenticationFilter. 
 * It is used to handle user login by extracting credentials from an HTTP request, authenticating the user, and potentially generating a JWT (JSON Web Token) for authentication.*/
@Slf4j
//@Configuration
public class AuthFilter extends UsernamePasswordAuthenticationFilter {
/*Extends UsernamePasswordAuthenticationFilter
UsernamePasswordAuthenticationFilter is a built-in Spring Security filter that handles user login authentication.
By extending it, AuthFilter customizes the authentication process.*/	
	
	@Autowired
	public AuthenticationManager authenticationManager;
	/*The AuthenticationManager is responsible for verifying user credentials (username & password).
This is injected using Spring's Dependency Injection (@Autowired)
Constructor Injection: Assigns authenticationManager to the class field.
This constructor is used when configuring the security filter chain.
.*/
	
	public AuthFilter(AuthenticationManager authenticationManager) {
		this.authenticationManager = authenticationManager;
		/*
		 private final String SECRET_KEY = "your_secret_key"; 

  
    private final long EXPIRATION_TIME = 10 * 60 * 60 * 1000; 
		*/
	}
	

	
	/*Extracts the username and password from the request and authenticates the user.
*/ 
	/*Extracts credentials (username, password) from the login request.
Creates an Authentication object (UsernamePasswordAuthenticationToken).
Delegates authentication to the authenticationManager.
It customizes how credentials are extracted from the request.
*/
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
	String username = request.getParameter("username");
	String password = request.getParameter("password");
	log.info("Attempting authentication for user: {}", username);
	UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
	return authenticationManager.authenticate(authenticationToken);
	}
	/* why we need to override this method 
	Extracts username & password from the request.
Creates an authentication token (UsernamePasswordAuthenticationToken).
Calls authenticationManager.authenticate() to validate credentials.
If valid, returns an Authentication object; if invalid, Spring Security rejects the request.
	*/


	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
				log.info("Authentication successful for user: {}", authResult.getName());
		// TODO Auto-generated method stub
		super.successfulAuthentication(request, response, chain, authResult);
		/*
		    // Generate JWT token
        String token = Jwts.builder()
                .setSubject(authResult.getName())  // Username as subject
                .claim("roles", authResult.getAuthorities().stream()
                        .map(GrantedAuthority::getAuthority).toList()) // Store roles/authorities
                .setIssuedAt(new Date()) // Token issued time
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME)) // Expiration time
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY) // Sign with secret key
                .compact();

        // Add token to response header
        response.setHeader("Authorization", "Bearer " + token);
		*/
	}

    /*Logs successful authentication.
Calls super.successfulAuthentication(), to let Spring Security continue processing. which:
Notifies other security filters that the authentication was successful.
Allows the request to proceed.

*/
   
   @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http, AuthenticationManager authManager) throws Exception {
	    AuthFilter authFilter = new AuthFilter(authManager);
	    authFilter.setFilterProcessesUrl("/login"); // Set custom login endpoint

	    http
	        .csrf().disable()
	        .authorizeHttpRequests(auth -> auth
	            .antMatchers("/login").permitAll()//Allow unauthenticated access to '/login' 
	            .anyRequest().authenticated()//All other requests require authentication
	        )
	        .addFilter(authFilter); // Add custom filter Registers the AuthFilter in the security filter chain.
	                             // Handles login requests at /login.
	    
	    return http.build();
	}
   @Bean
   public PasswordEncoder passwordEncoder() {
       return new BCryptPasswordEncoder();
   }
	
	 /*
	 why we need to override this method?
	 Logs authentication success.
Can generate a JWT token and send it back to the client.
Calls super.successfulAuthentication() to let Spring Security continue processing.
	 */
}


	
