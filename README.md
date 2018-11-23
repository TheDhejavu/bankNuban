# banksNuban
Nuban algorithm implementation


# IMPLEMENTATION MODALITY

CHECK DIGIT ALGORITHM The approved NUBAN format  ABC-DEFGHIJKL-M where ABC is the 3- digit bank code assigned by the CBN DEFGHIJKL is the NUBAN Account serial number M is the NUBAN Check Digit, required for account number validation

# Check Digit Algorithm
# Step 1. 
 Calculate A*3+B*7+C*3+D*3+E*7+F*3+G*3+H*7+I*3+J*3+K*7+L*3
# Step 2. 
 Calculate Modulo 10 of your result i.e. the remainder after dividing by 10
# Step 3. 
Subtract your result from 10 to get the Check Digit
# Step 4. 
If your result is 10, then use 0 as your check digit

# The Table below shows the 3 digit codes of all banks.

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
