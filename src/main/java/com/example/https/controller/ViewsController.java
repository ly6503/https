package com.example.https.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping
public class ViewsController {

    @RequestMapping(value = "/map",method = RequestMethod.GET)
    public String helloHtml(@RequestParam Long scenicId ,@RequestParam String token,  Model model) {
        model.addAttribute("scenicId",scenicId);
        model.addAttribute("token",token);
        return "handsome";
    }

}
