# Statik fayllarni yarating
yarn docs:build
#vitepress build docs

# Statik fayllarni yaratgandan so'ng, birinchi navbatda asosiy filialga o'ting
git add -A
git commit -m 'build doc'
git push origin

# Yaratilgan papkaga o'ting
cd docs/.vitepress/dist

# Agar maxsus domenga nashr qilinsa
echo 'biodasturchi.uz' > CNAME

git init
git add -A
git commit -m 'deploy'

# Agar e'lon qilingan bo'lsa https://<USERNAME>.github.io
# git push -f git@gitee.com:<USERNAME>/<USERNAME>.gitee.io.git main

# Agar e'lon qilingan bo'lsa https://<USERNAME>.github.io/<REPO>
# git push <remote hostname> <local branch name>:<remote branch name>
git push -f git@github.com:biodasturchi/docs.git main:gh-pages

cd -
