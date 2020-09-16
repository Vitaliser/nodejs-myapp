/*
 * @Copyright ParanoiA
 * @Created: 9/16/20, 2:43 PM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *     /\_/\
 *   =( °w° )=       Meow
 *     )   (  //
 *    (__ __)//
 */

function deleteLead(leadId) {
    $.ajax({
        url: '/lead/' + leadId + '/delete-json',
        contentType: "application/json; charset=utf-8",
        data_type: "json",
        data: JSON.stringify({leadId}),
        type: 'POST',
        success: ((res) => {
            console.log("Result: ", res)
            $("#" + leadId).remove();
        }),
        error: ((error) => {
            console.log("Error:", error);
        })
    });
}