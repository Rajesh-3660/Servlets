package com.rajesh;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/clearData")
public class Clear extends HttpServlet {

    private Map<String, String> data;

    @Override
    public void init() {
        data = new HashMap<>();
        data.put("Name1", "Karthik");
        data.put("Name2", "Uma");
    }

   
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
            data.clear();
            PrintWriter out = response.getWriter();
            out.print("Data cleared: ");
        }
}
