package com.cmpt732.yelp.recommendation.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "RestaurantRec",

        indexes = {@Index(name = "IX_RestaurantRec_Uid", columnList = "userId"),
                @Index(name = "IX_RestaurantRec_Bid", columnList = "businessId")
        }
)
public class RestaurantRec {

    @Id
    @GeneratedValue(
            strategy = GenerationType.AUTO,
            generator = "native"
    )
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    private long id;

    @Column(name = "userId", length=50, nullable=false)
    @JsonProperty("user_id")
    private String userId;

    @Column(name = "businessId", length=50, nullable=false)
    @JsonProperty("business_id")
    private String businessId;

    @Column(name = "businessName", nullable=false)
    @JsonProperty("name")
    private String businessName;

    private String feature1;

    private String feature2;

    private String feature3;

    private String feature4;

    private String feature5;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getBusinessId() {
        return businessId;
    }

    public void setBusinessId(String businessId) {
        this.businessId = businessId;
    }

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public String getFeature1() {
        return feature1;
    }

    public void setFeature1(String feature1) {
        this.feature1 = feature1;
    }

    public String getFeature2() {
        return feature2;
    }

    public void setFeature2(String feature2) {
        this.feature2 = feature2;
    }

    public String getFeature3() {
        return feature3;
    }

    public void setFeature3(String feature3) {
        this.feature3 = feature3;
    }

    public String getFeature4() {
        return feature4;
    }

    public void setFeature4(String feature4) {
        this.feature4 = feature4;
    }

    public String getFeature5() {
        return feature5;
    }

    public void setFeature5(String feature5) {
        this.feature5 = feature5;
    }
}
