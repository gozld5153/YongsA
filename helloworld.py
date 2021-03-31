# url = "http://naver.com"
url = "https://google.co.kr"
a = url.index('/')
a1 = url.index("/", a + 1)
text = url[a1 + 1:url.index('.')]
password = text[:3] + str(len(text)) + str(text.count("e")) + "!"
print("{0} 사이트의 비밀번호는 {1} 입니다." .format(url, password))

# 1:22:36 5-1리스트부터