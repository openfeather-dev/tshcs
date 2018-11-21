package com.tristatehc.dao;


import org.springframework.data.repository.CrudRepository;

import com.tristatehc.entity.ShiftCountByCustomer;

public interface ShiftCountByCustomerRepository extends CrudRepository<ShiftCountByCustomer, String> ,ShiftCountByCustomerRepositoryCustom{

}
