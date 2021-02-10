package net.application.dam.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.application.dam.exception.ResourceNotFoundException;
import net.application.dam.model.Stagiu;
import net.application.dam.repository.StagiuRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")

public class StagiuController {

	@Autowired
	private StagiuRepository stagiuRepository;
	
	// get all stagiuri
	@GetMapping("/stagiuri")
	public List<Stagiu> getAllStagiuri(){
		return stagiuRepository.findAll();
	}		
	
	// create stagiu rest api
	@PostMapping("/stagiuri")
	public Stagiu createStagiu(@RequestBody Stagiu stagiu) {
		return stagiuRepository.save(stagiu);
	}
	
	// get stagiu by id rest api
	@GetMapping("/stagiuri/{id}")
	public ResponseEntity<Stagiu> getStagiuById(@PathVariable Long id) {
		Stagiu stagiu =stagiuRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Stagiu not exist with id :" + id));
		return ResponseEntity.ok(stagiu);
	}
	
	// update stagiu rest api
	
	@PutMapping("/stagiuri/{id}")
	public ResponseEntity<Stagiu> updateStagiu(@PathVariable Long id, @RequestBody Stagiu stagiuDetails){
		Stagiu stagiu = stagiuRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Stagiu not exist with id :" + id));
		
		stagiu.setDenumireStagiu(stagiuDetails.getDenumireStagiu());
		stagiu.setDescriereStagiu(stagiuDetails.getDescriereStagiu());
		stagiu.setDataInceput(stagiuDetails.getDataInceput());
		stagiu.setDurata(stagiuDetails.getDurata());
		
		Stagiu updatedStagiu = stagiuRepository.save(stagiu);
		return ResponseEntity.ok(updatedStagiu);
	}
	
	// delete stagiu rest api
	@DeleteMapping("/stagiuri/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteStagiu(@PathVariable Long id){
		Stagiu stagiu = stagiuRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Stagiu not exist with id :" + id));
		
		stagiuRepository.delete(stagiu);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
