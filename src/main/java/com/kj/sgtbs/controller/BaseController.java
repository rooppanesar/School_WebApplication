package com.kj.sgtbs.controller;

import com.kj.sgtbs.enquiry.dao.EnquiryDao;
import com.kj.sgtbs.model.Enquiry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BaseController {

	@Autowired
	private EnquiryDao enquiryDao;

	@RequestMapping(value = "/enquiries", method = RequestMethod.POST)
	public void sendEnquiry(@RequestBody Enquiry enquiry) {
		getEnquiryDao().save(enquiry);
	}

	@RequestMapping(value="/enquiries", method = RequestMethod.GET)
	public Iterable<Enquiry> getEnquiries() {
		return getEnquiryDao().findAll();
	}

	public EnquiryDao getEnquiryDao() {
		return enquiryDao;
	}

	public void setEnquiryDao(EnquiryDao enquiryDao) {
		this.enquiryDao = enquiryDao;
	}
}
