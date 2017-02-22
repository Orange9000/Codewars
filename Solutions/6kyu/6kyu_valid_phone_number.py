def validPhoneNumber(phoneNumber):
    return bool(__import__('re').fullmatch('\(\d{3}\)\s\d{3}\-\d{4}', phoneNumber))
