package net.application.dam.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "students")

public class Student {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "cnp")
	private long cnpName;
	
	@Column(name = "adresa")
	private String adresaName;
	
	
	
	@Column(name = "email_id")
	private String emailId;
	
	@Column(name = "project_name")
	private String projectName;
	
	@Column(name = "departament_name")
	private String departamentName;
	
	
	
	@Column(name = "telefon_nr")
	private long cevaName;
	
	
	public Student() {
		
	}
	
	public Student(String firstName, String lastName,  long cnpName, String adresaName, String emailId, String projectName, String departamentName, long cevaName) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.cnpName=cnpName;
		this.adresaName=adresaName;
		
		this.emailId = emailId;
		this.projectName=projectName;
		this.departamentName=departamentName;
		this.cevaName=cevaName;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public long getCNPName() {
		return cnpName;
	}
	public void setCNPName(long cnpName) {
		this.cnpName = cnpName;
	}
	public String getAdresaName() {
		return adresaName;
	}
	public void setAdresaName(String adresaName) {
		this.adresaName = adresaName;
	}
	
	
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public String getDepartamentName() {
		return departamentName;
	}
	public void setDepartamentName(String departamentName) {
		this.departamentName = departamentName;
	}
	public long getCevaName() {
		return cevaName;
	}
	public void setCevaName(long cevaName) {
		this.cevaName = cevaName;
	}
	
}
