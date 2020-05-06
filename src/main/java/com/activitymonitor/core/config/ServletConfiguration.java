package com.activitymonitor.core.config;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

public class ServletConfiguration {

	public class WebServletConfiguration implements WebApplicationInitializer {
		
		public void onStartup(ServletContext context) throws ServletException {
			AnnotationConfigWebApplicationContext webContext = new AnnotationConfigWebApplicationContext();
			webContext.register(WebConfiguration.class);
			webContext.setServletContext(context);
			
			ServletRegistration.Dynamic servlet = context.addServlet("dispatcher", new DispatcherServlet(webContext));
			servlet.setLoadOnStartup(1);
			servlet.addMapping("/");
		}
		
	}
	
}