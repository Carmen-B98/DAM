package net.application.dam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.application.dam.model.Stagiu;

@Repository
public interface StagiuRepository extends JpaRepository<Stagiu, Long>{

}