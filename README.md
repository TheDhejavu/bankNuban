# banksNuban
Nuban algorithm implementation


1
C
ENTRAL BANK OF NIGERIA
PROPOSALS ON THE IMPLEMENTATION OF NUBAN SCHEME
(Version 0.
4
)
1.
INTRODUCTION
The  CBN  released  the  Guidelines  on  Nigeria  Uniform  Bank  Account 
Number(NUBAN)  scheme  in  August,  2010,  to  achieve  uniform  customer 
bank  account  numbering  stru
cture  among  all  Deposit  Money  Banks  in 
Nigeria,  within  9  months.  NUBAN  has  great  potentials  to  resolve  the 
observed  problems  with  electronic  payments  in  Nigeria,  as  many  of 
them are related to specification of wrong beneficiary account numbers.
However, a
number of operational modalities need to be released to the 
market  by  the  CBN,  to  facilitate  smooth  and  successful  implementation 
of  the   scheme.  Accordingly,  the  Cheques  and  ACH  Working  Group 
(CAWG)  met  and  deliberated  on  these  issues  and  hereby  recommend
the foregoing.
2.
IMPLEMENTATION MODALITY
a.
CHECK DIGIT ALGORITHM
The approved NUBAN format  
ABC
-
DEFGHIJKL
-
M
where 
ABC
is the 3
-
digit bank code assigned by the CBN
DEFGHIJKL
is the NUBAN Account serial number
M
is the NUBAN Check Digit, required for account 
number 
validation
We hereby recommend the following as 
the 
Check Digit Algorithm
Step 1. Calculate 
A*3+B*7+C*3+D*3+E*7+F*3+G*3+H*7+I*3+J*3+K*7+L*3
Step 2. Calculate Modulo 10 of your result i.e. the remainder after dividing by 10
Step 3. Subtract your re
sult from 10 to get the Check Digit
Step 4. If your result is 10, then use 0 as your check digit
The Table below shows the 3
-
digit codes of all banks.
2
BANK
3
-
Digit 
Code
BANK
3
-
Digit 
Code
BANK
3
-
Digit 
Code
1.Access Bank
044
9. Fidelity Bank
070
17. St
anbicIBTC
221
2. Afribank
014
10. Finbank
085
18. Standard Chartered Bank
068
3. Citibank
023
11. Guaranty Trust Bank
058
19. Sterling Bank
232
4. Diamond Bank
063
12. Intercontinental Bank
069
20. United Bank for Africa
033
5. Ecobank
050
13. Oceanic 
Bank
056
21. Union Bank
032
6. Equitorial Trust Bank
040
14. BankPhb
082
22. Wema bank
035
7. First Bank
011
15. 
Skye
Bank
076
23. Zenith Bank
057
8. F
CMB
214
16. SpringBank
084
24. Unity bank
215
Example 1: 
T
he NUBAN code of a typical customer bank 
account in First Bank of Nigeria Plc would be derived as 
follows:

The 3
-
digit code assigned to 
First Bank
in the Bankers Clearing System is 
011

Assume a NUBAN serial number of 000001457

The check digit would be computed as follows:
Step 1. 
0
*3+1*7+1*3+0*3+
0*7+0*3+0*3+0*7+1*3+4*3+5*7+7*3
= 81
Step 2. Module 10 of 81 is 1
i.e. 1 is the remainder when you divide 81 by 10
Step3. Subtract 1 from 1
0
to get  Check Digit 9
Therefore the NUBAN code for this example account is 0000014579 
Exampl
e 2:

Assume a NUBAN serial number of 00000
0022 in First Bank

The check digit would be computed as follows:
Step 1. 
0
*3+1*7+1*3+0*3+0*7+0*3+0*3+0*7+
0
*3+
0
*3+
2
*7+
2
*3, 10
=30
Step 2. Module 10 of 30 is 0 
i.e. 
0
is the remainder when you divide 
30
by 10
Step 3.
Subtract 0 from 10 to get 0
Step 4. So the check digit is 0
Therefore, the NUBAN code for this example account is 00000
00220
All Deposit Money Banks are advised to adopt this uniform 
algorithm to obtain the check digit component of th
e NUBAN 
codes of their customer account numbers. 
b.
TRANSITION
The  mode  of  transition  from  the  present  situation  to  the  NUBAN 
scheme  has  to  be  handled  carefully  to  ensure  the  success  of  the 
scheme
.
3
The NUBAN codes should be communicated to existing custome
rs 
as  soon  as  the  codes  become  available.  Also,  the  owners  of  all 
new  bank  accounts  opened  from  January  01,  2011,  should  be 
provided with NUBAN codes at the onset.
The NUBAN scheme requires that the account number field in the 
cheque  MICR  code  line 
should
feature  only  NUBAN  numbers.
Accordingly,  all 
new 
cheques  issued  to  customers  should  carry 
NUBAN codes.
With  this  transition  method, 
the  present  account  numbers  and 
NUBAN   codes   would   co
-
exist   in   the   electronic   payment   and 
cheque  clearing  systems  from  Janu
ary  2011  to 
June
2011.
This 
implies that 
banks have to build in the required intelligence in their 
respective  in
-
clearing  systems  to  distinguish  NUBAN  codes  from 
old  account  numbers  while  processing  inward  cheque  items
and 
electronic payment instruments, d
uring this transition period
.
The  deadline  for  full  NUBAN  compliance  is 
June
2
011.  Therefore 
only  instruments  (paper  and  electronic)  that  carry  NUBAN  codes 
and  pass  the  NUBAN  validation  test  (that  is,  instruments  with 
correct  check  digit) 
would  be  allowed
in  the  automated  clearing 
system as from this date.
