package com.cmpt732.yelp.recommendation.repository;

import com.cmpt732.yelp.recommendation.model.RestaurantRec;
import com.cmpt732.yelp.recommendation.model.WebsiteUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "recommendations", path = "recommendations")
public interface RestaurantRecRepository extends CrudRepository<RestaurantRec, Long> {

    @Override
    @RestResource(exported = false)
    void delete(RestaurantRec entity);

    @Override
    @RestResource(exported = false)
    void deleteAll();

    @Override
    @RestResource(exported = false)
    void deleteAll(Iterable<? extends RestaurantRec> entities);

    @Override
    @RestResource(exported = false)
    void deleteById(Long aLong);

    @RestResource(path = "byUserId", rel = "customFindUserMethod")
    List<RestaurantRec> findByUserId(@Param("userId") String userId);
}
