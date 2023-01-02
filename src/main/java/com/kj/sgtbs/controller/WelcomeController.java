package com.kj.sgtbs.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class WelcomeController {

	@RequestMapping(value={"/","welcome","home"})
	public String welcome(){
		return "index";
	}
	
	@RequestMapping(value="aboutus")
	public ModelAndView aboutUs(){

		return new ModelAndView("aboutus");
//		return "aboutus";

	}
	
	@RequestMapping(value="additional-programs")
	public String additionalPrograms(){
		return "additional-programs";
	}
	
	@RequestMapping(value="staff")
	public String staff(){
		return "staff";
	}
	
	@RequestMapping(value="events")
	public String events(){
		return "events";
	}
	
	@RequestMapping(value="gallery")
	public String gallery(){
		return "gallery";
	}
	
	@RequestMapping(value="contactus")
	public String contactUs(){
		return "contactus";
	}
	
	@RequestMapping(value="programs")
	public String programs(){
		return "programs";
	}
}
