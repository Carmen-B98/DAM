package net.application.dam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.application.dam.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{

}
