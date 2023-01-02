package com.kj.SchoolApp.review.dao;

import com.kj.SchoolApp.model.Review;
import org.springframework.data.repository.CrudRepository;

public interface ReviewDao extends CrudRepository<Review,Long> {
}
