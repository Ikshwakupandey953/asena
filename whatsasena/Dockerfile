FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Ikshwakupandey953/asena /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV REPO="https://github.com/Ikshwakupandey953/asena"
ENV TZ=Europe/Istanbul

RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["run.sh"]
