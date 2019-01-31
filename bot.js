import discord
import asyncio
from discord import Game
from discord.ext import commands
from discord.ext.commands import Bot
import json
import datetime
import time
import random


Client = discord.client
client = commands.Bot(command_prefix = '?')
Clientdiscord = discord.Client()


@client.event
async def on_member_join(member):
    print('Recognised that a member called ' + member.name + ' joined')
    await client.send_message(member, 'Hello! Welcome to our discord server! Please before you do anything on the server, read the rules. Thanks!')
    print('Sent message to ' + member.name)
async def on_ready():
    await client.change_presence(game=Game(name='?help'))
    print('Ready')


@client.event
async def on_message(message):
    if message.content == '?ping':
        await client.send_message(message.channel,'pong')
    if message.content == '?lenny':
        em = discord.Embed(description='')
        em.set_image(url='https://cdn.discordapp.com/attachments/476964141605715975/538819834348306452/image0.jpg')
        await client.send_message(message.channel, embed=em)
    if message.content.startswith('?meme'):
        randomlist = ['https://cdn.discordapp.com/attachments/476964141605715975/538820332887474177/image0.jpg','https://cdn.discordapp.com/attachments/476964141605715975/538820659091079179/image0.png','https://cdn.discordapp.com/attachments/476964141605715975/538821266807980032/image0.jpg','https://cdn.discordapp.com/attachments/476964141605715975/538821401046548496/image0.jpg','https://cdn.discordapp.com/attachments/476964141605715975/538821753846366230/image0.png','https://cdn.discordapp.com/attachments/476964141605715975/538821786125467648/image0.png',]
        await client.send_message(message.channel,(random.choice(randomlist)))
    if message.content.startswith('?fortune'):
        randomlist = ['You wont die today!','You will cry acid after your mother disowns you and the acid will melt your body down a drain.','The grip of your soul clinging onto your body will be torn apart and people who see your soulless body will run in terror of what terrifying creature youve become.','I love you!','You whole family loves you!','You are loved by the whole world!','You will one day end all hunger and pain!','You will cause World War 3.','The world will be torn apart by your ugly face.',]
        await client.send_message(message.channel,(random.choice(randomlist)))
    if message.content == '?help':
        await client.send_message(message.channel,'Well, im pretty new here, so I dont have many commands, but I do have ping, lenny, songlink, and fortune! Fortune is my favorite.... >:)')
    if message.content == '?songlink':
        await client.send_message(message.channel,'Choose out these songs by doing ?songlink(INSERTSONGHERE). Song options: "ohyeahyeah","nomercy","youspinme","rasputin","dancedead","bitchlasagna","ikeepholdingon","bitchlasagna2","dejavu","running90","gas3","dragonforce","damagedcoda","ussr","takemehome","crabrave","megalovania","oceanman","lwiay","imblue","shootstar","wearenum1","miichan","sportsresort","allstar","tobecontin","sandstorm","nyancat","numa","illuminati","keyboacat","takeonme","imsorry","despacito","despacito2"')
    if message.content == '?songlink ohyeahyeah':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=7fFSupGfZME OH YEAH YEAH')
    if message.content == '?songlink nomercy':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=S9uTScSgzrM Maybe ill be tracer today')
    if message.content == '?songlink youspinme':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=PGNiXGX2nLU Do you?')
    if message.content == '?songlink rasputin':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=YgGzAKP_HuM RA RA RASPUTIN')
    if message.content == '?songlink dancedead':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=bQCyPZzkvN0 DANCE TILL YOU ARE DEAD')
    if message.content == '?songlink bitchlasagna':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=6Dh-RL__uN4 Lasagna.')
    if message.content == '?songlink bitchlasagna2':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=uoww4ou3Ark Lasagna 2.')
    if message.content == '?songlink ikeepholdingon':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=YBJhzfvdyKw Do you really keep holding on though?')
    if message.content == '?songlink dejavu':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=dv13gl0a-FA Deja vu.')
    if message.content == '?songlink running90':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=BJ0xBCwkg3E Its the 2000s now. Grow up.')
    if message.content == '?songlink gas3':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=atuFSv2bLa8 GAS GAS GAS')
    if message.content == '?songlink dragonforce':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=0jgrCKhxE1s OwO')
    if message.content == '?songlink damagedcoda':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=4Js-XbNj6Tk oooooooooooooooooooooooooooof')
    if message.content == '?songlink ussr':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=U06jlgpMtQs Salute to mother Russia.')
    if message.content == '?songlink takemehome':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=1vrEljMfXYo West Virginia.')
    if message.content == '?songlink crabrave':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=LDU_Txk06tM Look at those beautiful crabs.')
    if message.content == '?songlink oceanman':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=tkzY_VwNIek The music video is weird.')
    if message.content == '?songlink megalovania':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=ZcoqR9Bwx1Y Sans.')
    if message.content == '?songlink lwiay':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=x9ttGPH8qYg Leave your entries in the sub reddit bros, and ill watch submissions in the next episode of lwiay')
    if message.content == '?songlink imblue':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=68ugkg9RePc Da Bo De Da Bo Di')
    if message.content == '?songlink shootstar':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=mllzzUjMezU Its a shooting star!')
    if message.content == '?songlink wearenum1':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=PfYnvDL0Qcw We are #1.')
    if message.content == '?songlink miichan':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=E9s1ltPGQOo The memories are real.')
    if message.content == '?songlink sportsresort':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=mWHl1xiOsy4 Going back to the good old days,the year of 2006.')
    if message.content == '?songlink allstar':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=L_jWHffIx5E Hey now. You are an all star.')
    if message.content == '?songlink tobecontin':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=cPCLFtxpadE To Be Continued')
    if message.content == '?songlink sandstorm':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=y6120QOlsfU Whats even happening in this video?')
    if message.content == '?songlink nyancat':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=QH2-TGUlwu4 meow')
    if message.content == '?songlink numa':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=KmtzQCSh6xk numa numa')
    if message.content == '?songlink illuminati':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=GRWbIoIR04c Illuminati confirmed')
    if message.content == '?songlink keyboacat':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=J---aiyznGQ Thats a talented cat.')
    if message.content == '?songlink takeonme':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=djV11Xbc914 Take me on.')
    if message.content == '?songlink imsorry':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=lXMskKTw3Bc NeVEr guNnA gIVe YoU uP')
    if message.content == '?songlink despacito':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=kJQP7kiw5Fk Why is this a meme?')
    if message.content == '?songlink despacito2':
        await client.send_message(message.channel,'https://www.youtube.com/watch?v=W3GrSMYbkBE I know why this is a meme.')
    if message.content == '?youtube':
        await client.send_message(message.channel,'https://www.youtube.com/channel/UCQvp6Na4PjoFoASVPEePLPQ :D')
client.login(process.env.BOT_TOKEN);
