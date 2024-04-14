#Getting the user's email address
email = input("What is your email address?:").strip()

#Splitting the user name
user_name = email[:email.index("@")]

#Splitting the domain name
domain_name = email[email.index("@")+1:]

#Message format
res = "Your username is '{}' and your domain name is '{}' ".format(user_name,domain_name)

#Displaying the message result
print(res)
