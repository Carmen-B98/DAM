package net.application.dam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.application.dam.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long>{

}