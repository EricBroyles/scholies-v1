follow instructions after making new repo, or https://gist.github.com/mindplace/b4b094157d7a3be6afd2c96370d39fad
you may run into an error, if so during step 3 after doing git remote add origin [copied web address]
set the branch: git branch -M main
and then push: git push -u origin main



in command line
Microsoft Windows [Version 10.0.19044.2130]
(c) Microsoft Corporation. All rights reserved.

C:\Users\ericc>cd OneDrive

C:\Users\ericc\OneDrive>cd Desktop

C:\Users\ericc\OneDrive\Desktop>cd Scholies.com

C:\Users\ericc\OneDrive\Desktop\Scholies.com>cd scholies-v1

C:\Users\ericc\OneDrive\Desktop\Scholies.com\scholies-v1>git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   src/pages/home/Home.js

no changes added to commit (use "git add" and/or "git commit -a")

C:\Users\ericc\OneDrive\Desktop\Scholies.com\scholies-v1>git remote add origin https://github.com/EricBroyles/scholies-v1.git

C:\Users\ericc\OneDrive\Desktop\Scholies.com\scholies-v1>git push -u origin main
error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/EricBroyles/scholies-v1.git'

C:\Users\ericc\OneDrive\Desktop\Scholies.com\scholies-v1>git branch -M main

C:\Users\ericc\OneDrive\Desktop\Scholies.com\scholies-v1>git push -u origin main
info: please complete authentication in your browser...
Enumerating objects: 44, done.
Counting objects: 100% (44/44), done.
Delta compression using up to 16 threads
Compressing objects: 100% (34/34), done.
Writing objects: 100% (44/44), 333.57 KiB | 5.85 MiB/s, done.
Total 44 (delta 7), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (7/7), done.
To https://github.com/EricBroyles/scholies-v1.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.

C:\Users\ericc\OneDrive\Desktop\Scholies.com\scholies-v1>