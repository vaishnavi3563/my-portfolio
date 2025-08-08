//  function LoadDashboard(){
//     if($.cookie('userid')) {
//       $.ajax({
//          method: "get",
//          url: `../../public/pages/user_dashboard.html`,
//          success: (response) => {
//              $("section").html(response);
//              $("#lblUser").html($.cookie('userid'));
//              $.ajax({
//                 method: 'get',
//                 url: `http://127.0.0.1:4040/appointments/${$.cookie('userid')}`,
//                 success: (appointments => {
//                     appointments.map(appointment => {
//                         $(`<div class="alert alert-success alert-dismissible">
//                             <h2>${appointment.title}</h2>
//                             <p>${appointment.description}</p>
//                             <div class="bi bi-calendar">${appointment.date}</div>
//                             <div class="mt-3">
//                                <button value=${appointment.appointment_id} id="btnEdit" class="bi bi-pen-fill btn btn-warning mx-2"></button>
//                                <button value=${appointment.appointment_id} id="btnDelete" class="bi bi-trash btn btn-danger"></button>
//                             </div>
//                          </div>`).appendTo("#appointments")

//                     })
//                 })
//              })
//          }
//      })
//     }else{
//          $.ajax({
//          method: "get",
//          url: `../../public/pages/${page_name}`,
//          success: (response) => {
//              $("section").html(response)
//          }
//      })
//     }
//  }

//  function LoadPage(page_name) {
//     $.ajax({
//         method: "get",
//         url: `../../public/pages/${page_name}`,
//         success: (response) => {
//             $("section").html(response)
//         }
//     })
//  }

// $(function(){
//     LoadPage("home.html");

//     // NewUser Button Click --> on home
//     $(document).on("click", "#btnNewUser", () => {
//         LoadPage('new_user.html')
//     })

//     //signin button click --> on home
//     $(document).on("click", "#btnSignin", () => {
//         LoadPage('user_login.html')
//     });

//     $(document).on("click", "#btnExistingUser", () => {
//         LoadPage('user_login.html')
//     });

//     //Register Button Click --> Post Data To Users
//     $(document).on("click", "#btnRegister", () => {
//         var user = {
//             user_id: $("#user_id").val(),
//             user_name: $("#user_name").val(),
//             password: $("#password").val(),
//             mobile: $("#mobile").val()
//         }

//         $.ajax({
//             method: "post",
//             url: `http://127.0.0.1:4040/register-user`,
//             data: user,
//             success: () => {
//                 alert("User Registered");
//             }
//         })
//         LoadPage('user_login.html')
//     });

//     //Login Button On loginPage
//     $(document).on("click", "#btnLogin", () => {
//         var user_id = $("#user_id").val();

//         $.ajax({
//             method: 'get',
//             url: `http://127.0.0.1:4040/users/${user_id}`,
//             success: (userDetails) => {
//                 if(userDetails){
//                     if($("#password").val() === userDetails.password){
//                         $.cookie('userid', $("#user_id").val());
//                         LoadDashboard();
//                     }else{
//                         alert(`Invalid Password`);
//                     }
//                 }else{
//                     alert(`User Not Found`);
//                 }
//             }
//         })

//     })

//     //Signout Logic

//     $(document).on("click", "#btnSignout",() => {
//         $.removeCookie('userid');
//         LoadPage('home.html');
//     })
//     //New Appointment
//     $(document).on("click", "#btnNewAppointment",() => {
//         LoadPage('add_appointment.html')
//     })

//     $(document).on("click", "#btnCancel",() => {
//         LoadPage('user_dashboard.html')
//     })

//     //ADD Appointment

//     $(document).on("click", "#btnAdd", () => {
//         var appointment= {
//             appointment_id: $("#appointment_id").val(),
//             title: $("#title").val(),
//             description: $("#description").val(),
//             date: $("#date").val(),
//             user_id: $.cookie("userid")
//         }
//         $.ajax({
//             method: "post",
//             url: `http://127.0.0.1:4040/add-appointment`,
//             data: appointment
//         })
//         alert('Appointment Added');
//         LoadDashboard();
//     })
//     //Edit Click
//     $(document).on("click", "#btnEdit", (e) => {
//         LoadPage("edit_appointment.html");

//         $.ajax({
//             method: "get",
//             url: `http://127.0.0.1:4040/appointment/${e.target.value}`,
//             success: (appointment => {
//                 $("#appointment_id").val(appointment.appointment_id),
//                 $("#title").val(appointment.title),
//                 $("#description").val(appointment.description),
//                 $("#date").val(appointment.date.slice(0, appointment.date.indexOf("T"))),
//                 sessionStorage.setItem("appointment_id", appointment.appointment_id);
//             })
//         })
//     })

//     $(document).on("click", "#btnEditCancel", () => {
//         LoadDashboard();
//     })

//     //SAVE CLICK
//     $(document).on("click", "#btnSave", (e) => {
//         var appointment= {
//             appointment_id: $("#appointment_id").val(),
//             title: $("#title").val(),
//             description: $("#description").val(),
//             date: $("#date").val(),
//             user_id: $.cookie("userid")
//         }
//         $.ajax({
//             method: "put",
//             url: `http://127.0.0.1:4040/edit-appointment/${sessionStorage.getItem("appointment_id")}`,
//             data: appointment
//         })
//         alert('Appointment Updated Successfully');
//         LoadDashboard();
//     })

//     //DELETE CLICK
//     $(document).on("click", "#btnDelete", (e) => {
//         var choice = confirm('Are You Sure? Want To Delete');
//         if(choice === true){
//             $.ajax({
//                 method: "delete",
//                 url: `http://127.0.0.1:4040/delete-appointment/${e.target.value}`,
//              })
//              alert('Appointment Deleted...');
//              LoadDashboard();
//         }
//     })
// })




function LoadDashboard() {
    if ($.cookie('userid')) {
        $.ajax({
            method: "get",
            url: `../../public/pages/user_dashboard.html`,
            success: (response) => {
                $("section").html(response);
                $("#lblUser").html($.cookie('userid'));
                $.ajax({
                    method: 'get',
                    url: `http://127.0.0.1:4040/appointments/${$.cookie('userid')}`,
                    success: (appointments => {
                        appointments.map(appointment => {
                            $(`<div class="alert alert-success alert-dismissible">
                                <h2>${appointment.title}</h2>
                                <p>${appointment.description}</p>
                                <div class="bi bi-calendar">${appointment.date}</div>
                                <div class="mt-3">
                                    <button value=${appointment.appointment_id} id="btnEdit" class="bi bi-pen-fill btn btn-warning mx-2"></button>
                                    <button value=${appointment.appointment_id} id="btnDelete" class="bi bi-trash btn btn-danger"></button>
                                </div>
                            </div>`).appendTo("#appointments")
                        })
                    })
                })
            }
        })
    } else {
        $.ajax({
            method: "get",
            url: `../../public/pages/${page_name}`,
            success: (response) => {
                $("section").html(response)
            }
        })
    }
}

function LoadPage(page_name) {
    $.ajax({
        method: "get",
        url: `../../public/pages/${page_name}`,
        success: (response) => {
            $("section").html(response)
        }
    })
}

$(function () {
    LoadPage("home.html");

    //New User Button Click
    $(document).on("click", "#btnNewUser", () => {
        LoadPage('new_user.html')
    });

    //Signin Button Click
    $(document).on("click", "#btnSignin", () => {
        LoadPage('user_login.html');
        setTimeout(() => autoFillRememberedUser(), 200);
    });

    // ✅ Existing User Button
    $(document).on("click", "#btnExistingUser", () => {
        LoadPage('user_login.html');
        setTimeout(() => autoFillRememberedUser(), 200);
    });

    //Register Button
    // $(document).on("click", "#btnRegister", () => {
    //     var mobileVal = $("#mobile").val();  
    //     var mobileMatch = mobileVal.match(/^\+91\d{10}$/);  
    //     var user = {
    //         user_id: $("#user_id").val(),
    //         user_name: $("#user_name").val(),
    //         password: $("#password").val(),
    //         mobile: mobileMatch ? mobileVal: null
    //     };

    //     $.ajax({
    //         method: "post",
    //         url: `http://127.0.0.1:4040/register-user`,
    //         data: user,
    //         success: () => {
    //             alert("User Registered");
    //         }
    //     });
    //     LoadPage('user_login.html');
    // });

       $(document).on("click", "#btnRegister", () => {
       var mobileVal = $("#mobile").val().trim();  
       var mobileMatch = mobileVal.match(/^\+91\d{10}$/);  
   
       if (!mobileMatch) {
           alert("Invalid mobile number! Please enter in format +919876543210");
           return;
       }
       var user = {
           user_id: $("#user_id").val(),
           user_name: $("#user_name").val(),
           password: $("#password").val(),
           mobile: mobileVal
       }
       $.ajax({
           method: "post",
           url: `http://127.0.0.1:4040/register-user`,
           data: user,
           success: () => {
               alert("User Registered");
               LoadPage('user_login.html');
           }
       });
   });
      
    //Login Button with Remember Me
    $(document).on("click", "#btnLogin", () => {
        var user_id = $("#user_id").val();
        var password = $("#password").val();
        var rememberMe = $("#rememberMe").is(":checked");

        $.ajax({
            method: 'get',
            url: `http://127.0.0.1:4040/users/${user_id}`,
            success: (userDetails) => {
                if (userDetails) {
                    if (password === userDetails.password) {
                        //Save credentials if Remember Me is checked
                        if (rememberMe) {
                            localStorage.setItem("rememberUser", JSON.stringify({
                                user_id: user_id,
                                password: password
                            }));
                        } else {
                            localStorage.removeItem("rememberUser");
                        }

                        $.cookie('userid', user_id);
                        LoadDashboard();
                    } else {
                        alert(`Invalid Password`);
                    }
                } else {
                    alert(`User Not Found`);
                }
            }
        });
    });

    //Signout Logic
    $(document).on("click", "#btnSignout", () => {
        $.removeCookie('userid');
        LoadPage('home.html');
    });

    //New Appointment
    $(document).on("click", "#btnNewAppointment", () => {
        LoadPage('add_appointment.html')
    });

    $(document).on("click", "#btnCancel", () => {
        LoadPage('user_dashboard.html')
    });

    //Add Appointment
    $(document).on("click", "#btnAdd", () => {
        var appointment = {
            appointment_id: $("#appointment_id").val(),
            title: $("#title").val(),
            description: $("#description").val(),
            date: $("#date").val(),
            user_id: $.cookie("userid")
        };
        $.ajax({
            method: "post",
            url: `http://127.0.0.1:4040/add-appointment`,
            data: appointment
        });
        alert('Appointment Added');
        LoadDashboard();
    });

    //Edit Appointment
    $(document).on("click", "#btnEdit", (e) => {
        LoadPage("edit_appointment.html");
        $.ajax({
            method: "get",
            url: `http://127.0.0.1:4040/appointment/${e.target.value}`,
            success: (appointment => {
                $("#appointment_id").val(appointment.appointment_id),
                    $("#title").val(appointment.title),
                    $("#description").val(appointment.description),
                    $("#date").val(appointment.date.slice(0, appointment.date.indexOf("T"))),
                    sessionStorage.setItem("appointment_id", appointment.appointment_id);
            })
        })
    });

    $(document).on("click", "#btnEditCancel", () => {
        LoadDashboard();
    });

    //Save Edited Appointment
    $(document).on("click", "#btnSave", () => {
        var appointment = {
            appointment_id: $("#appointment_id").val(),
            title: $("#title").val(),
            description: $("#description").val(),
            date: $("#date").val(),
            user_id: $.cookie("userid")
        };
        $.ajax({
            method: "put",
            url: `http://127.0.0.1:4040/edit-appointment/${sessionStorage.getItem("appointment_id")}`,
            data: appointment
        });
        alert('Appointment Updated Successfully');
        LoadDashboard();
    });

    //Delete Appointment
    $(document).on("click", "#btnDelete", (e) => {
        var choice = confirm('Are You Sure? Want To Delete');
        if (choice === true) {
            $.ajax({
                method: "delete",
                url: `http://127.0.0.1:4040/delete-appointment/${e.target.value}`,
            });
            alert('Appointment Deleted...');
            LoadDashboard();
        }
    });
});

//Helper function to auto-fill remembered user credentials
function autoFillRememberedUser() {
    var savedUser = JSON.parse(localStorage.getItem("rememberUser"));
    if (savedUser) {
        $("#user_id").val(savedUser.user_id);
        $("#password").val(savedUser.password);
        $("#rememberMe").prop("checked", true);
    }
}

