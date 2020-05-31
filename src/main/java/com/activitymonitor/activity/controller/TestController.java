package com.activitymonitor.activity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.activitymonitor.activity.service.ActivityService;

@RestController
public class TestController {
	
	@Autowired
	private ActivityService activityService;
	
	
	@GetMapping("/teste")
	public void test() {
		try {
			activityService.getProcessCpuLoad();
		} catch (Exception e) {
			System.out.println(e.getLocalizedMessage());
		}
	}
}
