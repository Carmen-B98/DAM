package net.application.dam.model;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "projects")
public class Project {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "denumireProiect")
	private String denumireProiect;

	@Column(name = "dataIncepere")
	private Date dataIncepere;
	
	@Column(name = "dataFinalizare")
	private Date dataFinalizare;
	
	@ManyToOne
	private Student student;

	
	public enum SpecificatiiProiect {
		PROPUS, IN_EXECUTIE, ABANDONAT, FINALIZAT;
	}

	public Project() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Project( String denumireProiect, Date dataIncepere,Date dataFinalizare, Student student) {
		super();
		this.denumireProiect = denumireProiect;
		this.dataIncepere = dataIncepere;
		this.dataFinalizare=dataFinalizare;
		this.student=student;
	}

	public long getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDenumireProiect() {
		return denumireProiect;
	}

	public void setDenumireProiect(String denumireProiect) {
		this.denumireProiect = denumireProiect;
	}

	public Date getDataIncepere() {
		return dataIncepere;
	}

	public void setDataIncepere(Date dataIncepere) {
		this.dataIncepere = dataIncepere;
	}

	public Date getDataFinalizare() {
		return dataFinalizare;
	}

	public void setDataFinalizare(Date dataFinalizare) {
		this.dataFinalizare = dataFinalizare;
	}

	public Student getNumeStudent() {
		return student;
	}

	public void setNumeStudent(Student student) {
		this.student = student;
	}
	
	
	@Override
	public String toString() {
		return "\nProiect [idProiect=" + id + ", denumireProiect=" + denumireProiect + ", dataIncepere=\" + dataIncepere + \",]";
	}
}
