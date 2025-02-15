package com.app.pojos;

import javax.persistence.*;

import lombok.Data;

@Data //lombok for getter, setter, equals, hashCode
@Entity
@Table(name = "user")
public class User {
    @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)    private int id ;

    private String userid;
    
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
   @JoinColumn(referencedColumnName = "email")
    private Guide guide;
   
    
   @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(referencedColumnName = "email")
    private Customer customer;
    
   @OneToOne(fetch = FetchType.LAZY , cascade = CascadeType.ALL)
    @JoinColumn(referencedColumnName = "userid")
    private Admin admin;
}
