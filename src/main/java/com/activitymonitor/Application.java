package com.activitymonitor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.activitymonitor.activity.service.ActivityService;

@SpringBootApplication
public class Application {

	@Autowired
	private ActivityService activityService;
	
//	public static void main(String[] args) {
//		SpringApplication.run(Application.class, args);
//	}
}