FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Furkan92-sudo/WhatsAsenaDuplicated2.git /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV REPO="https://github.com/phaticusthiccy/WhatsAsenaDuplicated"
ENV TZ=Europe/Istanbul

RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["run.sh"]
