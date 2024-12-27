app: fonction_wogue.c fonction_wogue.h main_wogue.c
	gcc fonction_wogue.c main_wogue.c -o app
run:
	./app
rm:
	app