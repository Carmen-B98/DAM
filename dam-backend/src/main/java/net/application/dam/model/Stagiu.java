package net.application.dam.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;


@Entity
@Table(name = "stagiuri")

public class Stagiu {
	
	
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "denumire_stagiu")
	private String denumireStagiu;
	
	@Column(name = "descriere_stagiu")
	private String descriereStagiu;
	
	@Column(name = "data_inceput")
	private Date dataInceput;

	@Column(name = "durata")
	private Integer durata;
	
	
	
	public enum TipStagiu {
		PLATIT, NEPLATIT;
	}

	public Stagiu() {
		
		// TODO Auto-generated constructor stub
	}
	
	public Stagiu(String denumireStagiu,String descriereStagiu,Date dataInceput, Integer durata) {
		super();
		this.denumireStagiu=denumireStagiu;
		this.descriereStagiu=descriereStagiu;
		this.dataInceput = dataInceput;
		this.durata = durata;
		
	}
	
	public long getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getDenumireStagiu() {
		return denumireStagiu;
	}
	
	public void setDenumireStagiu(String denumireStagiu) {
		this.denumireStagiu = denumireStagiu;
	}
	
	public String getDescriereStagiu() {
		return descriereStagiu;
	}
	
	public void setDescriereStagiu(String descriereStagiu) {
		this.descriereStagiu = descriereStagiu;
	}
	
	public Date getDataInceput() {
		return dataInceput;
	}

	public void setDataInceput(Date dataInceput) {
		this.dataInceput = dataInceput;
	}

	public Integer getDurata() {
		return durata;
	}

	public void setDurata(Integer durata) {
		this.durata = durata;
	}
	
	
}
