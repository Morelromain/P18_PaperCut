/*
Script de redirection d'impression aux utilisateurs 
quand ils sont connectés en local (192.168...), 
sauf pour l'utilisateur "accueil".
L'envoi de l'impression vers IMPRIMANTE_1 est transféré
vers IMPRIMANTE_2.
Un mail est envoyé à l'utilisateur automatiquement.
pour le prévenir de cette redirection.
*/


function printJobHook(inputs, actions) {
  var username = (inputs.job.username);
  var userip = (inputs.job.clientIP);
  var useripshort = userip.startsWith("192.168");
  if (useripshort == true && username!= "accueil"){
    var recipient = inputs.user.email;
    var userfullname = inputs.user.fullName
    var subject = "Accès à l'imprimante interdit";
    var body = `Bonjour ${userfullname}, l'accès à l'imprimante IMPRIMANTE_1 ne vous est autorisé(e) \
uniquement en télétravail, votre impression a été transférée sur IMPRIMANTE_2`;
    actions.job.redirect("IMPRIMANTE_2", {allowHoldAtTarget: true});
    actions.utils.sendEmail(recipient, subject, body);
  }
  return;
}

