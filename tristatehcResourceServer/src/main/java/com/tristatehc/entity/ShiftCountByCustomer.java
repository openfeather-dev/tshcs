package com.tristatehc.entity;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.NamedStoredProcedureQueries;
import javax.persistence.NamedStoredProcedureQuery;
import javax.persistence.ParameterMode;
import javax.persistence.StoredProcedureParameter;
import javax.persistence.Table;

@Entity
@Table(name = "CustomerShifts")
@NamedStoredProcedureQueries({
   @NamedStoredProcedureQuery(name = "getCustomerShifts", 
                              procedureName = "proc_shift_count_by_cust",
                              resultClasses = { ShiftCountByCustomer.class },
                              parameters = {
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_cust", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_start_dt", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "start_indx", type = Integer.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "end_indx", type = Integer.class)
                              }),
   @NamedStoredProcedureQuery(name = "saveCustomerShifts", 
   							procedureName = "proc_shift_count_by_cust_insert",
						    parameters = {
						 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_user_email", type = String.class),
						 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_cust", type = String.class),
						 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_total_count", type = Integer.class),
						 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_assig_count", type = Integer.class),
						 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_unassg_count", type = Integer.class),
						 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_shift_title", type = String.class),
						 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_shift_dt", type = String.class),
						 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_shift_tm", type = String.class),
						   })
})

public class ShiftCountByCustomer {

	@Column(name = "total")
	String total;
	@Column(name = "assig")
	String assign;
	@Column(name = "unassig")
	String unsassign;
	
	@EmbeddedId
	ShiftCountByCustomerId id;
	
	public String getTotal() {
		return total;
	}
	public void setTotal(String total) {
		this.total = total;
	}
	public String getAssign() {
		return assign;
	}
	public void setAssign(String assign) {
		this.assign = assign;
	}
	public String getUnsassign() {
		return unsassign;
	}
	public void setUnsassign(String unsassign) {
		this.unsassign = unsassign;
	}
	public ShiftCountByCustomerId getId() {
		return id;
	}
	public void setId(ShiftCountByCustomerId id) {
		this.id = id;
	}
	@Override
	public String toString() {
		return "ShiftCountByCustomer [total=" + total + ", assign=" + assign + ", unsassign=" + unsassign + ", id=" + id
				+ "]";
	}
	
	
	
}
