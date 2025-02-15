package com.app.utils;



import org.springframework.security.core.authority.SimpleGrantedAuthority;
/*A Spring Security class used to represent user roles (authorities).*/
import org.springframework.util.StringUtils;
/*A Spring utility class to check if a string is empty or null.*/
import javax.servlet.http.HttpServletRequest;
/*This Security class is a utility class for handling authentication and authorization in a Spring Security-based application.
It provides methods for:

Converting user roles into Spring Security's SimpleGrantedAuthority format.
Extracting the Bearer token from an HTTP request header.*/
public class Security {
    public static final String ROLE_PREFIX = "ROLE_";
    public static final String AUTH_HEADER = "authorization";
    public static final String AUTH_TOKEN_TYPE = "Bearer";
    public static final String AUTH_TOKEN_PREFIX = AUTH_TOKEN_TYPE + " ";

    public static SimpleGrantedAuthority convertToAuthority(String role) {
        String formattedRole = role.startsWith(ROLE_PREFIX) ? role : ROLE_PREFIX + role;

        return new SimpleGrantedAuthority(formattedRole);
    }
/*authorization*/
    public static String extractAuthTokenFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader(AUTH_HEADER);

        if (StringUtils.hasLength(bearerToken) && bearerToken.startsWith(AUTH_TOKEN_PREFIX)) {
            return bearerToken.substring(7);
        }
        return null;
    }
}
