	$(document).ready(function(){
		$.validator.addMethod("lowercase",function(value, element)
		{
			return this.optional(element)||/[a-z]+/.test(value)},""),
		$.validator.addMethod("upercase",function(value, element)
		{
			return this.optional(element)||/[A-Z]+/.test(value)},""),
		$.validator.addMethod("specialchar",function(value, element)
		{
			return this.optional(element)||/^[a-z0-9\_]+$/i.test(value)},""),
		$("#form").validate(
		{
			rules:{
				email:{
					required:!0
				},
				password:{
					required:!0,minlength:8,
					lowercase:!0,
					upercase:!0,
					specialchar:!0
				}
			},
			messages:{
				password:{
					required:"Enter password",
					minlength:"Length should be greater than 8",
					lowercase:"One Lower case Letter",
					upercase:" One Upper case Letter",
					specialchar:"no special char"}

				},

				highlight: function (element) {
					$(element).parent().addClass('error')
				},
				unhighlight: function (element) {
					$(element).parent().removeClass('error')
				}
			}
			) 
	});
