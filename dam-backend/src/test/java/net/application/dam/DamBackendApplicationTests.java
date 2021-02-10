package net.application.dam;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;



import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.HttpClientErrorException;

import net.application.dam.model.Student;
import net.application.dam.model.Stagiu;
import net.application.dam.model.Project;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = DamBackendApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class DamBackendApplicationTests {
     @Autowired
     private TestRestTemplate restTemplate;

     @LocalServerPort
     private int port;

     private String getRootUrl() {
         return "http://localhost:" + port;
     }

     @Test
     public void contextLoads() {

     }

     @Test
     public void testGetAllStudents() {
     HttpHeaders headers = new HttpHeaders();
        HttpEntity<String> entity = new HttpEntity<String>(null, headers);
        ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/students",
        HttpMethod.GET, entity, String.class);  
        assertNotNull(response.getBody());
    }

    @Test
    public void testGetStudentById() {
        Student student = restTemplate.getForObject(getRootUrl() + "/students/1", Student.class);
        System.out.println(student.getFirstName());
        assertNotNull(student);
    }

    @Test
    public void testCreateStudent() {
        Student student = new Student();
        
        student.setFirstName("admin");
        student.setLastName("admin");
        student.setAdresaName("bla");
        student.setEmailId("admin@gmail.com");
        student.setDepartamentName("yummy");
        student.setProjectName("proiect1");
        
        
        ResponseEntity<Student> postResponse = restTemplate.postForEntity(getRootUrl() + "/students", student, Student.class);
        assertNotNull(postResponse);
        assertNotNull(postResponse.getBody());
    }

    @Test
    public void testUpdateStudent() {
        int id = 1;
        Student student = restTemplate.getForObject(getRootUrl() + "/students/" + id, Student.class);
        student.setFirstName("admin1");
        student.setLastName("admin2");
        student.setAdresaName("admin3");
        student.setEmailId("admin@gmail.com");
        student.setDepartamentName("admin4");
        student.setProjectName("admin5");
        restTemplate.put(getRootUrl() + "/students/" + id, student);
        Student updatedStudent = restTemplate.getForObject(getRootUrl() + "/students/" + id, Student.class);
        assertNotNull(updatedStudent);
    }

    @Test
    public void testDeleteStudent() {
         int id = 2;
         Student student = restTemplate.getForObject(getRootUrl() + "/students/" + id, Student.class);
         assertNotNull(student);
         restTemplate.delete(getRootUrl() + "/students/" + id);
         try {
        	 student = restTemplate.getForObject(getRootUrl() + "/students/" + id, Student.class);
         } catch (final HttpClientErrorException e) {
              assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
         }
    }
    
    @Test
    public void testGetAllStagiuri() {
    HttpHeaders headers = new HttpHeaders();
       HttpEntity<String> entity = new HttpEntity<String>(null, headers);
       ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/stagiuri",
       HttpMethod.GET, entity, String.class);  
       assertNotNull(response.getBody());
   }

   @Test
   public void testGetStagiuById() {
       Stagiu stagiu = restTemplate.getForObject(getRootUrl() + "/stagiuri/1", Stagiu.class);
       System.out.println(stagiu.getDenumireStagiu());
       assertNotNull(stagiu);
   }


@Test
   public void testCreateStagiu() {
       Stagiu stagiu = new Stagiu();
       
       stagiu.setDenumireStagiu("admin");
       stagiu.setDescriereStagiu("admin");
      
       stagiu.setDurata(2);
      
       
       
       ResponseEntity<Stagiu> postResponse = restTemplate.postForEntity(getRootUrl() + "/stagiuri", stagiu, Stagiu.class);
       assertNotNull(postResponse);
       assertNotNull(postResponse.getBody());
   }


   @Test
   public void testUpdateStagiu() {
       int id = 1;
       Stagiu stagiu = restTemplate.getForObject(getRootUrl() + "/stagiuri/" + id, Stagiu.class);
       stagiu.setDenumireStagiu("admin1");
       stagiu.setDescriereStagiu("admin2");
       stagiu.setDurata(2);
       
       restTemplate.put(getRootUrl() + "/stagiuri/" + id, stagiu);
       Stagiu updatedStagiu = restTemplate.getForObject(getRootUrl() + "/stagiuri/" + id, Stagiu.class);
       assertNotNull(updatedStagiu);
   }

   @Test
   public void testDeleteStagiu() {
        int id = 2;
        Stagiu stagiu = restTemplate.getForObject(getRootUrl() + "/stagiuri/" + id, Stagiu.class);
        assertNotNull(stagiu);
        restTemplate.delete(getRootUrl() + "/stagiuri/" + id);
        try {
       	 stagiu = restTemplate.getForObject(getRootUrl() + "/stagiuri/" + id, Stagiu.class);
        } catch (final HttpClientErrorException e) {
             assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
        }
   }
   
   @Test
   public void testGetAllProjects() {
   HttpHeaders headers = new HttpHeaders();
      HttpEntity<String> entity = new HttpEntity<String>(null, headers);
      ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/projects",
      HttpMethod.GET, entity, String.class);  
      assertNotNull(response.getBody());
  }

  @Test
  public void testGetProjectById() {
      Project project = restTemplate.getForObject(getRootUrl() + "/projects/1", Project.class);
      System.out.println(project.getDenumireProiect());
      assertNotNull(project);
  }


@Test
  public void testCreateProject() {
      Project project = new Project();
      
      project.setDenumireProiect("hei");
      
     
    
     
      
      
      ResponseEntity<Project> postResponse = restTemplate.postForEntity(getRootUrl() + "/projects", project, Project.class);
      assertNotNull(postResponse);
      assertNotNull(postResponse.getBody());
  }


  @Test
  public void testUpdateProject() {
      int id = 1;
      Project project = restTemplate.getForObject(getRootUrl() + "/projects/" + id, Project.class);
      project.setDenumireProiect("admin18888");
      
      
      restTemplate.put(getRootUrl() + "/projects/" + id, project);
      Project updatedProject = restTemplate.getForObject(getRootUrl() + "/projects/" + id, Project.class);
      assertNotNull(updatedProject);
  }

  @Test
  public void testDeleteProject() {
       int id = 2;
       Project project = restTemplate.getForObject(getRootUrl() + "/projects/" + id, Project.class);
       assertNotNull(project);
       restTemplate.delete(getRootUrl() + "/projects/" + id);
       try {
      	 project = restTemplate.getForObject(getRootUrl() + "/projects/" + id, Project.class);
       } catch (final HttpClientErrorException e) {
            assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
       }
  }
   
   
}
