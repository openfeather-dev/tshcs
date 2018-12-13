package com.tristatehc.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.TitlesRepository;
import com.tristatehc.dto.TitlesDTO;
import com.tristatehc.entity.Titles;
import com.tristatehc.mapper.UserMapper;

@Service
public class TitleServiceImpl implements TitleService {
	
	@Autowired
	TitlesRepository titlesRepo;
	
	@Override
	public List<TitlesDTO> getTitleByState(String state) {
		List<Titles> titles = titlesRepo.findBystateIgnoreCaseOrderBySequence(state);
		return titles.stream().map(title -> UserMapper.INSTANCE.titlesToTitlesDto(title)).collect(Collectors.toList());
	
	}

}
