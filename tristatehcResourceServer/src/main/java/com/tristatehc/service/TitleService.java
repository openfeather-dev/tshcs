package com.tristatehc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tristatehc.dto.TitlesDTO;

@Service
public interface TitleService {
	List<TitlesDTO> getTitleByState(String state);
}
