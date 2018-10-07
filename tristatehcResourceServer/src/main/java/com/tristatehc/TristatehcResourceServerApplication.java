package com.tristatehc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;

@EnableResourceServer
@SpringBootApplication
public class TristatehcResourceServerApplication extends ResourceServerConfigurerAdapter{
	
	@Autowired
	private Environment env;

	public static void main(String[] args) {
		SpringApplication.run(TristatehcResourceServerApplication.class, args);
	}
	
	 @Override
	    public void configure(HttpSecurity http) throws Exception {
		    http
		      .antMatcher("/**")
		      .authorizeRequests()
		        .antMatchers(env.getProperty("open.access.url"))
		        .permitAll()
		      .anyRequest()
		        .authenticated();
	    }

}
