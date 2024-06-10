FROM oven/bun

ADD . .
RUN bun install

CMD bun start
