## banksNuban
Nuban algorithm implementation


### IMPLEMENTATION MODALITY

CHECK DIGIT ALGORITHM. The approved NUBAN format  ABC-DEFGHIJKL-M where ABC is the 3- digit bank code assigned by the CBN DEFGHIJKL is the NUBAN Account serial number M is the NUBAN Check Digit, required for account number validation

## Check Digit Algorithm
## Step 1. 
 Calculate A*3+B*7+C*3+D*3+E*7+F*3+G*3+H*7+I*3+J*3+K*7+L*3
## Step 2. 
 Calculate Modulo 10 of your result i.e. the remainder after dividing by 10
## Step 3. 
Subtract your result from 10 to get the Check Digit
## Step 4. 
If your result is 10, then use 0 as your check digit

## The Table below shows the 3 digit codes of some banks.

S/N| BANK| CODE | 
--- | --- | --- | 
1 | Access bank| 044 |
2 | fidelity Bank| 070 |
3 | StanbicIBTC| 221 |
4 | Afribank| 014 |
5 | Finbank| 085 |
6 | Guaranty Trust Bank| 058 |
7 | Diamond Bank | 063 |
8 | United Bank for Africa | 033 |
9 | Ecobank| 050 |
10 | Union Bank| 032 |

### Example 1: 
The NUBAN code of a typical customer bank 
account in First Bank of Nigeria Plc would be derived as follows:
The 3-digit code assigned to First Bank in the Bankers Clearing System is 011 Assume a NUBAN serial number of 000001457 The check digit would be computed as follows:

#### Step 1.
0*3+1*7+1*3+0*3+0*7+0*3+0*3+0*7+1*3+4*3+5*7+7*3= 81
#### Step 2.
Module 10 of 81 is 1
i.e. 1 is the remainder when you divide 81 by 10 
#### Step 3. 
Subtract 1 from 10 to get  Check Digit 9

Therefore the NUBAN code for this example account is 0000014579 

