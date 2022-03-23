/*
Script d'interdiction d'impression aux utilisateurs 
quand ils sont connectés en local (192.168...), 
sauf pour l'utilisateur "accueil".
L'impression est annulée
*/

function printJobHook(inputs, actions) {
  var username = (inputs.job.username);
  var userip = (inputs.job.clientIP);
  var useripshort = userip.startsWith("192.168");
  if (useripshort == true && username!= "accueil"){
    actions.job.cancel();
  }
  return;
}
