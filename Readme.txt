Commandes Batch permettant d'obtenir le nombre de fichiers dans un repertoire et ses sous repertoires

1. ls -l|wc -l

Compte le nombre de ligne en sortie du ls (grâce à wc -l) et donc potentiellement les informations complémentaires (comme la taille totale des fichiers).

2. find/home/toto -type f|wc -l|awk `{print $1}`

Compte le nombre de fichiers dans une aborescence (dossier et tous ses sous-dossiers).

3. find/home/toto -max depth 1 -type f|wc -l|awk `{print $1}`

Compte le nombre de fichiers dans un dossier (sans descendre dans ses sous-dossiers)

