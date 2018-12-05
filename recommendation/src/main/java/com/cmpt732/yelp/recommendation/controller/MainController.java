package com.cmpt732.yelp.recommendation.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping("/")
    public String index() {
        //has to be without blank spaces
        return "forward:index4.html";
    }
}
