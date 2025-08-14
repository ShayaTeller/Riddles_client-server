בס"ד

riddles end points

get

1\)



**endpointName(RA)**

'/riddles'

request = get..

response = dataArrayFromDB;



**endpointName(RB)**

2\)

'/riddles/:id'

request = params = id;

resonse = riddle.eq({id:id}) || riddel\_not\_found;





post



**endpointName(RC)**

'/riddles'

request = body = 'newriddle'

response = success || false;

delete



**endpointName(RD)**

'/riddles/:Question'

request = params = question;

response = success || riddel\_not\_found;



put



**endpointName(RE)**

'/riddles/:Question'







players end points



get



**endpointName(PA)**

1\)

'/players'

request = get...

response = dataArreyFromDB;



**endpointName(PB)**

2\)

'/player/:name' 

request = parrams = name;

response = one player.eq({username:name}) || player\_not-found;



post  



**endpointName(PC)**

'/player'

request = body = player;

response = player id;



put 



**endpointName(PE)**

'/player/:id'

request = body = player;

response = success;





