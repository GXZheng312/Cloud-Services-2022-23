Bij deze opdracht ga je het pub/sub patroon maken op twee exchange types, nl. de Direct Exchange en de Topic Exchange.

De beide varianten kun je vinden via deze link van RabbitMQ

1) Voor de Direct Exchange zorg je dat je een tekst hebt met een severity level die ja als string meegeeft.
Je bouwt dus het voorbeeld na dat ook op de site van RabbitMQ te vinden is.


2) Voor de Topic Exchange maak je de routing iets complexer

We gebruiken hetzelfde severity level alleen heeft de error severity level niveau's van 1 t/m 3 (je mag het ook geel, oranje en rood geven);

Alleen willen we nu hebben dat alle severity levels die een 'Error' waarde bevatten naar que A en B gaan en daarnaast alleen de code 'rood' (of 3 zoals je wilt) 
naar queue C gaat. Alle overige severities gaan naar queue D.

bijv. :

'hallo' 'error' 'Groen'   A en B
'hallo' 'error' 'Rood'   A, B en C
'hallo' 'warning' 'Rood' D


Je moet dus vier consumers bouwen en één pulisher.

Waarom is het geen goed idee om hier de fanout te gebruiken?
