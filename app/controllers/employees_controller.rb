class EmployeesController < ApplicationController

    def index
        if params[:sort_by].present? 
            # /employees?sort_by=first_name or /employees?sort_by=last_name
            render json: Employee.all.order(params[:sort_by]) 
        else
            # if no query params specified, default to json described in README
            render json: Employee.all
        end
    end

end