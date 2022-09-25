# získání e-mailové adresy uživatele
email = input("Jaká je tvoje e-mailová adresa?:").strip()

# rozdělění uživatelského jména
user_name = email[:email.index("@")]

# rozdělění názvu domény
domain_name = email[email.index("@")+1:]

# Formát zprávy
res = "Tvoje uživatelské jméno je '{}' a tvůj název domény je '{}' ".format(user_name,domain_name)

# Zobrazení výsledku zprávy
print(res)
