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
import net.application.dam.model.Project;
import net.application.dam.repository.ProjectRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")

public class ProjectController {
	@Autowired
	private ProjectRepository projectRepository;
	
	// get all projects
	@GetMapping("/projects")
	public List<Project> getAllProjects(){
		return projectRepository.findAll();
	}		
	
	// create project rest api
	@PostMapping("/projects")
	public Project createProject(@RequestBody Project project) {
		return projectRepository.save(project);
	}
	
	// get project by id rest api
	@GetMapping("/projects/{id}")
	public ResponseEntity<Project> getProjectById(@PathVariable Long id) {
		Project project =projectRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Project not exist with id :" + id));
		return ResponseEntity.ok(project);
	}
	
	// update project rest api
	
	@PutMapping("/projects/{id}")
	public ResponseEntity<Project> updateProject(@PathVariable Long id, @RequestBody Project projectDetails){
		Project project = projectRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Project not exist with id :" + id));
		
		project.setDenumireProiect(projectDetails.getDenumireProiect());
		
		project.setDataIncepere(projectDetails.getDataIncepere());
		project.setDataFinalizare(projectDetails.getDataFinalizare());
		
		Project updatedProject = projectRepository.save(project);
		return ResponseEntity.ok(updatedProject);
	}
	
	// delete project rest api
	@DeleteMapping("/projects/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteProject(@PathVariable Long id){
		Project project = projectRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Project not exist with id :" + id));
		
		projectRepository.delete(project);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
